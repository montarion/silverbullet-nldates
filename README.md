
# SilverBullet Natural language dates
Uses the [Chrono](https://www.npmjs.com/package/chrono-node) library to parse natural language into date links, useful when you keep a journal.

Entirely inspired by [nldates-obsidian](https://github.com/argenos/nldates-obsidian), though without the nice features like autocomplete and inline aliassing.

## Usage

Trigger the command palette and run `parse date`
![plug showcase](silverbullet-nldates-demo.gif)

## Build
To build this plug, make sure you have [SilverBullet installed](https://silverbullet.md/Install). Then, build the plug with:

```shell
deno task build
```

```shell
deno task build && cp *.plug.js /my/space/_plug/
```

SilverBullet will automatically sync and load the new version of the plug (or speed up this process by running the {[Sync: Now]} command).

## Installation
Simply add

```
- github:montarion/silverbullet-nldates/nldates.plug.js
```

to your `PLUGS` file, run `Plugs: Update` command and off you go!
