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
jest:
	NODE_OPTIONS=--experimental-vm-modules npx jest
jest-co:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage