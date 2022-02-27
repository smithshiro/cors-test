package main

import (
	"github.com/gin-gonic/gin"
)
type PostHello struct {
    ID uint64 `json:"id"`
    Name string `json:"name"`
}
func main() {
    r := gin.Default()
    api := r.Group("/api")
    {
        api.GET("/hello", func(c *gin.Context) {
            c.IndentedJSON(200, gin.H{
                "message": "hello",
            })
        })
        api.POST("/hello", func(c *gin.Context) {
            var json PostHello
            if err := c.ShouldBindJSON(&json); err != nil {
                c.IndentedJSON(400, gin.H{"error": err.Error()})
                return
            }
            json.Name += "!!"
            c.IndentedJSON(200, json)
        })
        api.GET("/cookie", func(c *gin.Context) {
            cookie, err := c.Cookie("user")
            if err != nil {
                c.IndentedJSON(200, gin.H{"message": "cookie is not set"})
                return
            }
            c.IndentedJSON(200, gin.H{"user": cookie})
        })
        api.POST("/cookie", func(c *gin.Context) {
            c.SetCookie(
                "user", // cookie name
                "shiro", // cookie value
                60 * 60, // max age
                "/", // path
                "sample.com", // domain
                false, // secure
                true, // httpOnly
            )
            c.IndentedJSON(200, gin.H{"message": "cookie is set"})
        })
    }
    r.Run(":3000")
}
