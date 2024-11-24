# 绑定

## 参数绑定

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.GET("/ping/:name", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong " + c.Param("name"),
		})
	})
}
```

## 路由绑定

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	r := gin.Default()

	r.GET("/ping/:name", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong " + c.Param("name"),
		})
	})
	r.GET("/foo/:name", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "foo " + c.Param("name"),
		})
	})
}
```

## 路由参数
