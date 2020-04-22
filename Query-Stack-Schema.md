# Quora Full-Stack Schema
 
**Users:**

| Variable Name  |    Type     |  Parameters |
|----------|:-------------:|------:|
| id | integer | unique, not null |
| email | string | unique, not null |
| username | string | not null |
| password_digest | string | not null |
| session_token | string | unique, not null |
| credentials | text | none |


**Posts:**

| Variable Name  |    Type     |  Parameters |
|----------|:-------------:|------:|
| id | integer | unique, not null |
| title | string |  not null  |
| body | string |  not null  |
| topic | string |  not null  |
| *author_id* | integer |  not null  |



**Comments:**
| Variable Name  |    Type     |  Parameters |
|----------|:-------------:|------:|
| id | integer | unique, not null |
| body | string | none |
| *post_id* | integer | not null |
| *author_id* | integer | not null |

**Likes:**

| Variable Name  |    Type     |  Parameters |
|----------|:-------------:|------:|
| id | integer | unique, not null |
| *post_id* | integer | not null |
| *user_id* | integer | not null |

**Shares:**

| Variable Name  |    Type     |  Parameters |
|----------|:-------------:|------:|
| id | integer | unique, not null |
| *post_id* | integer | not null |
| *user_id* | integer | not null |

***
( all foreign keys are italicized )
