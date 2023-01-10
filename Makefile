install:
	npm ci
publish:
	npm publish --dry-run
link:
	sudo npm link
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .