# Exercise-1
## List all tasks:
Get /tasks

## Get one task:
Get /tasks/:id

## Create a task:
Post /tasks

## Change a task's status:
Patch /tasks/:id

## Delete a task
Delete /tasks/:id

## List tasks in project 3
Get /projects/3/tasks

## Only high priority tasks
Get /tasks?priority=high


# Exercise-2
## For a successful list
status = 200

## For a task created
status = 201

## For a task deleted
status = 204

## For tasks that doesnt exist
status = 404

## POST with no title
status = 400

## If server crashed
status = 500
