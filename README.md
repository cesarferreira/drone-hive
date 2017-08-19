# drone-hive
> Hive with all of the android drones

Companion repository for [drone](https://github.com/cesarferreira/drone)

## How to contribute?
Use the [drone](https://github.com/cesarferreira/drone) tool.

> $ drone create

and/or

create a file with the **hive/`username/repository`.json**

file: **hive/`username/repository`.json**
```
{
  "name": "username/repository",
  "description": "description", // OPTIONAL
  "homepage": "homepage", // OPTIONAL
  "dependencies": [
    {
      "dependency": "com.username.library:library",
      "compileType": "compile"
    }
  ],
  "plugins": [ // OPTIONAL
    {
      "apply": "com.jakewharton.butterknife"
    }
  ],
  "repository": {
    "server": "jcenter",
    "url": "repository url" // OPTIONAL
  }
}
```

------------

### Real life example for `retrofit`:

file: **hive/`square/retrofit`.json**
```
{
  "name": "square/retrofit",
  "description": "A type-safe HTTP client for Android and Java",
  "homepage": "http://square.github.io/retrofit/",
  "dependencies": [
    {
      "dependency": "com.squareup.retrofit2:retrofit",
      "compileType": "compile"
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
