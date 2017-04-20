``` sql 
select count(*) filter(where active is false) as inactive,
count(*) filter(where active is true) as active 
from subscriber;
```

