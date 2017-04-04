---
layout: post
title: Testing Spring-Boot apps using TestContainers and Spock
published: true
---
An elegant way to implement tests for a [Spring-Boot](https://projects.spring.io/spring-boot/) based applications is to use TestContainers to simply test database interactions and Spock framework to write truly expressive tests that can be used as the application's living documentation (always up to date otherwise the build fails).

## An integration test database in a Docker container with TestConatainers

> [TestContainers](https://www.testcontainers.org/) is a Java library that supports JUnit tests, providing lightweight, throwaway instances of common databases, Selenium web browsers, or anything else that can run in a Docker container.

TestContainers requires __Docker or docker-machine (for OS X)__ and __Java 8__ installed on the machine that will run the tests

Add the testContainers postgres dependency to gradle build :

```
compile 'org.testcontainers:postgresql:<VERSION>'
```

The JUnit `@Rule/@ClassRule` feature is not needed for this example,we will use the [modified JDBC URL](https://www.testcontainers.org/usage/database_containers.html#jdbc-url) solution which is more elegant because it doesn't need specific code :

> As long as you have TestContainers and the appropriate JDBC driver on your classpath, you can simply modify regular JDBC connection URLs to get a fresh containerized instance of the database each time your application starts up.

Update the test profile properties file : src/test/resources/`application-test.properties`

``` properties
datasource.sample.url=jdbc:tc:postgresql://localhost/sampleapp
datasource.sample.username=user
datasource.sample.password=password
datasource.sample.driver-class-name=org.testcontainers.jdbc.ContainerDatabaseDriver
datasource.sample.max-active=1
```

That's all you have to do to launch a postgresql database in a docker container for your integration tests.

Running the tests will display the following lines during the application start :

```
org.testcontainers.DockerClientFactory   : Docker host IP address is localhost
org.testcontainers.DockerClientFactory   : Connected to docker:
  Server Version: 17.03.1-ce
  API Version: 1.27
  Operating System: Alpine Linux v3.5
  Total Memory: 1999 MB
org.testcontainers.DockerClientFactory   : Disk utilization in Docker environment is 5% (54617 MB available )
🐳 [postgres:latest] : Pulling docker image: postgres:latest. Please be patient; this may take some time but only needs to be done once.
🐳 [postgres:latest] : Creating container for image: postgres:latest
🐳 [postgres:latest] : Starting container with ID: 3aff20c8cfbcfc359ac3547619343a4e6d7eddcdbb4fcb51666039262f1dfd76
🐳 [postgres:latest] : Container postgres:latest is starting: 3aff20c8cfbcfc359ac3547619343a4e6d7eddcdbb4fcb51666039262f1dfd76
🐳 [postgres:latest] : Waiting for database connection to become available at jdbc:postgresql://localhost:32768/test using query 'SELECT 1'
🐳 [postgres:latest] : Obtained a connection to container (jdbc:postgresql://localhost:32768/test)
🐳 [postgres:latest] : Container postgres:latest started
```

## Highly expressive integration tests with spock

> [Spock](http://spockframework.org/) is a testing and specification framework for Java and Groovy applications. What makes it stand out from the crowd is its beautiful and highly expressive specification language.

Add needed stuff to gradle build file :

```
apply plugin: 'groovy'
...
dependencies {
	testCompile('org.spockframework:spock-core:1.1-groovy-2.4-rc-1')
	testCompile('org.spockframework:spock-spring:1.1-groovy-2.4-rc-1')
	...
}
```

And start writing some expressive specifications under src/test/groovy/ :

``` groovy
    void "should return the created object after creation (POST)"() {
        given: " The character Ragnar Lothbrok from the show Vikings"
		def ragnar = new Character()
		ragnar.setFirstName("Ragnar")
		ragnar.setLastName("Lothbrok")
		ragnar.setShow("Vikings")
        when: "The character is POSTED to /character endpoint"
        	ResponseEntity entity = restTemplate.postForEntity('/character', ragnar, Character.class)
        then: "The returned status is 201 CREATED and the content is the created object with its id in the system."
		entity.statusCode == HttpStatus.CREATED
		entity.body.getFirstName() == ragnar.getFirstName()
		entity.body.getLastName() == ragnar.getLastName()
		entity.body.getShow() == ragnar.getShow()
		entity.body.getId() != null
    }

    void "should access a character via GET /character/{id} after creation via POST /character"() {
        given: " The character Walter White  from the show Breaking Bad"
		def walter = new Character()
		walter.setFirstName("Walter")
		walter.setLastName("White")
		walter.setShow("Breaking Bad")
        when: "The character Walter White is POSTED to /character endpoint"
		ResponseEntity created = restTemplate.postForEntity('/character', walter, Character.class)
        then: "The character is accessible via GET /character/{id} endpoint"
		ResponseEntity retrieved = restTemplate.getForEntity('/character/'+created.body.getId(), Character.class)
		retrieved.statusCode == HttpStatus.OK
		retrieved.body.getFirstName() == walter.getFirstName()
		retrieved.body.getLastName() == walter.getLastName()
		retrieved.body.getShow() == walter.getShow()
    }

```

The Gradle generated report under `/build/reports/tests/test/` is as expressive as the tests we wrote:

Successful specification  :

![All_test_ok_spec](https://raw.githubusercontent.com/areguig/areguig.github.io/master/images/posts/boot-testContainer-spock/All_test_ok_spec.png)

Failing tests :

![Failing_tests_overview](https://raw.githubusercontent.com/areguig/areguig.github.io/master/images/posts/boot-testContainer-spock/Failing_tests_overview.png)

Failing test details :

![Failing_test_details](https://raw.githubusercontent.com/areguig/areguig.github.io/master/images/posts/boot-testContainer-spock/Failing_test_details.png)

### Wrap up

I really like the combo Spring-Boot,TestContainers and Spock. It is a fully working stack for any microservice (or is it micro-service?😜) you need to write.

A sample app using [TestContainers](https://www.testcontainers.org/) and [Spock](http://spockframework.org/) for integration tests :

- Powered by [Spring-Boot](https://projects.spring.io/spring-boot/)
- Built with [Gradle](https://gradle.org/)
- Uses [JOOQ](https://www.jooq.org/) as DSL to construct SQL queries.

[Check it out](https://github.com/areguig/boot-testContainers-spock-sample-app).

Feel free to open issues or submit PRs if you think it is needed and correct me if i am wrong.
