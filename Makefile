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
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage