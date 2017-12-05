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

create a file with the **hive/`repository`.json**

file: **hive/`repository`.json**

```json
{
  "name": "repository",
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
  },
  "author": {
    "name": "author",
    "webpage": "https://github.com/author"
  }
}
```

------------

### Real life example for `retrofit`:

file: **hive/`retrofit`.json**

```json
{
  "name": "retrofit",
  "description": "Type-safe HTTP client for Android and Java by Square, Inc.",
  "homepage": "https://github.com/square/retrofit",
  "dependencies": [
    {
      "dependency": "com.squareup.retrofit2:retrofit",
      "compileType": "implementation"
    }
  ],
  "repository": {
  "server": "maven"
  },
  "author": {
    "name": "square",
    "webpage": "https://github.com/square/"
  }
}
```

## Created by
[Cesar Ferreira](https://cesarferreira.com)

## License
MIT © [Cesar Ferreira](http://cesarferreira.com)
