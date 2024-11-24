# 快速入门

1. 安装

```bash
go get -u github.com/gin-gonic/gin
```

2. 创建一个 Gin 实例
> 在项目根目录创建 `main.go` 文件

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
```

3. 运行

```bash
go run main.go
```

4. 访问

```bash
curl http://localhost:8080/ping
```


## 项目结构

```bash
.
├── config            # 配置文件
├── controller        # 控制器
├── dao               # 数据库
├── job               # 任务
├── model             # 模型
├── internal          # 内部包
├── pkg               # 公共包
├── router            # 路由
│   └── middleware   # 中间件
├── service           # 服务
└── script            # 脚本
```
