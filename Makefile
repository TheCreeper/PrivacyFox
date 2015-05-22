#!/usr/bin/make -f

NAME=privacyfox
RM=rm
RM_FLAGS=
ZIP=zip
ZIP_FLAGS=-r

all: build

build:
	@$(ZIP) $(ZIP_FLAGS) $(NAME).xpi install.rdf bootstrap.js icon.png

clean:
	@$(RM) $(RM_FLAGS) $(NAME).xpi
