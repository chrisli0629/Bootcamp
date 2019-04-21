Why would you want to call a third party API on the FRONTEND instead of the back end.  See Schemes A and B below. 

Evaluation: 2 valid answers satisfy this question though more answers are possible.

Scheme A (Client making 3rd party HTTP call):
```
 /---------                |----------|
|          |  http calls   |          |
|  browser | ------------> |    my    |
|          | ------|       |  server  |
|----------|       |       |----------|
                   |
                   |       |----------|
                   |------>|          |
                           | 3rd party|
                           |    API   |
                           |----------|

```

Scheme B (my server making 3rd party HTTP request):
```

 /---------                |----------|
|          |  http calls   |          |
|  browser | ------------> |    my    |
|          |               |  server  |
|----------|               |----------|
                                |
                                |
                                \/
                           |----------|
                           |          |
                           | 3rd party|
                           |    API   |
                           |----------|

```


ANSWER:

1. Is there confidential information being passed with the API? - I would make an API call from the front end browser, if no confidential information, e.g. login/password, secret keys, or tokens are needed to access the third party API.

1. Is the displayed information the same for all users or tailored for individuals? - I'll make a third party API call from the front-end if all users can get the same information.

1. Do you want the processing load to be handled by client or server? - I plan on having thousands of users so in order to keep processing to a minimum on my server, I plan on having users do the processing in their browsers, like Facebook.

1. Can I reduce the load on the third party API by caching results on my server?  Or does the third party API restrict my usage and I need to reduce the number of requests made, by caching the results on my server and reusing them.