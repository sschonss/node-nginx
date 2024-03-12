package main

import (
	"fmt"
	"net/http"
)

func main() {
	for {
		url := "http://127.0.0.1/random"
		go makeRequestGet(url)
	}
}

func makeRequestGet(url string) {
	resp, err := http.Get(url)
	if err != nil {
		fmt.Println("Error:", err)
		return
	}

	fmt.Println("Response:", resp)

}