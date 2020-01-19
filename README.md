# Hello Kubernetes

This is a very brief tutorial on getting from zero to a Kubernetes deployment using Helm charts. This is not really intended as a beginner's guide, nor as a detailed tutorial for the DevOps professional. This is more of a quick reference for the developer that does this infrequently and needs a concise guide so they can get on with their other work.

## Create docker image and push to Docker Hub

1. Create docker file.
1. Build docker image
```sh
docker build -t capnajax/hello-kubernetes .
```

1. Run the image
```sh
docker run -p 49160:9080 -d capnajax/hello-kubernetes
```

1. Test the output
```sh
curl -i http://localhost:49160
```

1. Push the image to Docker Hub
```sh
docker commit -m "Hello Kubernetes" -a "capnajax" hello-kubernetes capnajax/hello-kubernetes:latest
```

1. Log in to docker
```sh
docker login
docker push capnajax/hello-kubernetes 
```

## Create the Helm chart

```sh
helm create chart # creates a chart named "chart"
```

Edit the templates and values in the chart folder and run a test install

```sh
helm install --dry-run --debug ./chart
```
