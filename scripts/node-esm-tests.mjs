#!/usr/bin/env node

import { createRequire } from "module";
const require = createRequire(import.meta.url);

import {
	Just,
	Nothing,
	Maybe,
	Either,
	AsyncEither,
	IO,
	IOx,
	AnyIO,
	AllIO,
	IOEventStream,
	IOHelpers,
	IOxHelpers,
	MonioUtil
} from "../dist/esm/index.mjs";
global.Just = Just;
global.Nothing = Nothing;
global.Maybe = Maybe;
global.Either = Either;
global.AsyncEither = AsyncEither;
global.IO = IO;
global.IOx = IOx;
global.AnyIO = AnyIO;
global.AllIO = AllIO;
global.IOEventStream = IOEventStream;
global.IOHelpers = IOHelpers;
global.IOxHelpers = IOxHelpers;
global.MonioUtil = MonioUtil;

global.QUnit = require("qunit");

require("../tests/qunit.config.js");
require("./load-tests.js")();

QUnit.start();
