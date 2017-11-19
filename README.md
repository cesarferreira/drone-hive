# drone-hive
> Hive with all of the android drones

<p align="center">
<img src="https://github.com/cesarferreira/drone/raw/master/extras/add4.gif" width="100%" />
</p>

Companion repository for [drone](https://github.com/cesarferreira/drone)

## How to contribute?
Use the [drone](https://github.com/cesarferreira/drone) tool.

> $ drone create

and/or

create a file with the **hive/`username/repository`.json**

file: **hive/`username/repository`.json**

```json
{
  "name": "username/repository",
  "description": "description",
  "homepage": "homepage",
  "dependencies": [
    {
      "dependency": "com.username.library:library",
      "compileType": "implementation"
    }
  ],
  "repository": {
    "server": "jcenter",
    "url": "repository_url"
  }
}
```

------------

### Real life example for `retrofit`:

file: **hive/`square/retrofit`.json**

```json
{
  "name": "square/retrofit",
  "description": "A type-safe HTTP client for Android and Java",
  "homepage": "http://square.github.io/retrofit/",
  "dependencies": [
    {
      "dependency": "com.squareup.retrofit2:retrofit",
      "compileType": "implementation"
    }
  ],
  "repository": {
    "server": "jcenter"
  }
}
```

## Created by
[Cesar Ferreira](https://cesarferreira.com)

## License
MIT © [Cesar Ferreira](http://cesarferreira.com)
