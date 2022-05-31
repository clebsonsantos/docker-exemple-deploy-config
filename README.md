# ***Docker Config*** 

### ***Environment with Nodejs + TypeOrm***


#### CREATE IMAGE: 
```
  docker image build -t server-expenses:1.0 .

```

#### MOVE UP CONTAINER-COMPOSE:
```
  docker compose up -d

```

#### DROP ALL CONTAINERS I UPLOADED FROM THIS DIRECTORY:
```
  docker compose down

```
#### OTHER COMMANDS: 
- (list all containers)
```
  docker ps container ls -a 

```

- (see what processes are running)
```
  docker compose logs -f

```

- (list the started containers)
```
  docker compose ps

```

- (upload local backup to docker image)
```
  cat backup.sql | sudo docker exec -i id_image psql -U postgres -d data_base_name

```
- (download local backup docker(postgres))
```
  docker exec name_image pg_dumpall -U postgres > /home/usr/backups/my_backup.sql

```


##### NOTE:  in older versions of docker compose it is necessary to assign the ` - ` ex: (docker-compose)
