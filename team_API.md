# team_API

 本接口用于team功能的实现和管理

 - 列出可加入的队伍
 - 加入队伍
 - 退出队伍
 - 队伍排行榜
 - 发出开宝箱的help请求
 - 获取队伍内宝箱状态列表
 - 帮助开宝箱
 - 更新宝箱状态列表
 - 剩余可帮助开启宝箱次数
 - 更新自己宝箱的状态
 - 成功开启后领奖
 - 判断是否满足解锁team功能的条件

## 列出可加入的队伍

#### HttpMethod

```http
[GET]
```

#### Path

```http
/team/teamlist/page=10&page_number=10
```

###  Response

**样例**

```json
"team":[
    {
    "team_name":"test_team1",
    "team_number":3,
    "team_merber":[
        {
            "user_name":"test_user1",
            "level":11
        },
        {
            "user_name":"test_user2",
            "level":12
        },
        {
            "user_name":"test_user3",
            "level":13
        }
    ]
},
    {
    "team_name":"test_team2",
    "team_number":2,
    "team_merber":[
        {
            "user_name":"test_user4",
            "level":14
        },
        {
            "user_name":"test_user5",
            "level":15
        }
    ]
}
]
```

 **字段说明**

| 参数        | 数据类型 | 说明            |
| ----------- | -------- | --------------- |
| team_name   | String   | 队伍名，唯一    |
| team_number | Integer  | 队伍人数        |
| team_member | Object   | user_name&level |
| team_rank   | Integer  | 队伍当前排名    |

## 加入队伍

#### HttpMethod

```http
[POST]
```

#### Path

```http
/team/join/:userid
```

#### 查询参数说明

| 参数    | 说明   |
| ------- | ------ |
| user_id | 用户id |

**样例**

```
/team/:user_id
```

## PostBody

**样例**

```json
{
    "user_name":"test_user6",
    "team_name":"test_name3",
    "level":12
}
```

**字段说明**

| 字段      | 数据类型 | 说明             |
| --------- | -------- | ---------------- |
| user_name | String   | 用户名，唯一     |
| level     | Integer  | 用户等级，大于11 |
| team_name | String   | 队伍名，唯一     |

## Response

**样例**

```json

```



**字段说明**



## 退出队伍

## 队伍排行榜

## 发出开宝箱的help请求

## 获取队伍内宝箱状态列表

## 帮助开宝箱

## 更新宝箱状态列表

## 剩余可帮助开启宝箱次数

## 更新自己宝箱的状态

## 成功开启后领奖

## 判断是否满足解锁team功能的条件

*前端判断？*

#### Http Method

```http
 [POST]
```

#### Path

```http
 /team/checkuserlevel/
```

#### PostBody

**样例**

```json
{
    "user_name"："test_user",
    "level":15
}
```

**参数说明**

| 参数      | 数据类型 | 说明                 |
| --------- | -------- | -------------------- |
| user_name | string   | 用户姓名,唯一        |
| level     | Integer  | 用于判断等级是否满足 |