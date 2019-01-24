package main

import (
	"net/http"
	"context"
	"time"
	"log"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/mongodb/mongo-go-driver/mongo"
	"github.com/mongodb/mongo-go-driver/bson"
)

func main() {
	// Echo instance
	e := echo.New()
	ctx, _ := context.WithTimeout(context.Background(), 10*time.Second)
	client, err := mongo.Connect(ctx, "mongodb://localhost:27017")
	if err != nil{
		log.Fatal(err)
	}	
	collection := client.Database("testing").Collection("numbers")
	res, err := collection.InsertOne(ctx, bson.M{"name": "pi", "value": 3.14159})
	id := res.InsertedID
	log.Println(id)
	
	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	
	// Route => handler
	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello, World!\n")
	})


	// Start server
	e.Logger.Fatal(e.Start(":1323"))
}
