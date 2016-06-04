.DEFAULT_GOAL = build
.PHONY: build

clean:
	rm -rf _site

build: clean
	bundle exec jekyll build

dev:
	bundle exec guard
