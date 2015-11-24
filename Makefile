.PHONY: met test

copy-conf:
	cp --no-clobber ./settings/development/settings-dist.json ./settings/development/settings.json
	cp --no-clobber ./settings/production/settings-dist.json ./settings/production/settings.json
	cp --no-clobber ./settings/staging/settings-dist.json ./settings/staging/settings.json

	cp --no-clobber ./settings/production/mup-dist.json ./settings/production/mup.json
	cp --no-clobber ./settings/staging/mup-dist.json ./settings/staging/mup.json

install: copy-conf
	npm install

run-dev:
	NODE_ENV=development node ./bin/dev.js

run-debug:
	NODE_ENV=development node ./bin/debug.js

run-prod:
	NODE_ENV=production node ./bin/prod.js

deploy-meteor:
	node ./bin/deploy.js meteor.com

deploy-modulus:
	node ./bin/deploy.js modulus

deploy-mup:
	node ./bin/deploy.js mup

deploy-demeteorizer:
	node ./bin/deploy.js demeteorizer

test:
	NODE_ENV=test ./node_modules/karma/bin/karma start && ./node_modules/karma/bin/karma-run
