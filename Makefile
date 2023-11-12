include .env
export

.DEFAULT_GOAL := copy_build
BAS_VER = 26.4.0
MODULE_NAME = AccountProfileMaker

MODULE_SOURCE_DIR = "AppData/Roaming/BrowserAutomationStudio/apps/${BAS_VER}/modulecreate/AccountProfileMaker"
MODULE_BAS_INSTALLED_DIR = AppData/Roaming/BrowserAutomationStudio/apps/${BAS_VER}/custom/${MODULE_NAME}
MODULE_DST_DIR = bas_scripts/modules/compiled

ZIP_DST_GENERATED_NAME = "${MODULE_NAME}Generated.zip"
ZIP_DST_PROD_NAME = "${MODULE_NAME}.zip"

copy_build:
	@echo "Copying build..."
	@LATEST_DIR="$$(ls -1dt "${USERPROFILE}/${MODULE_SOURCE_DIR}"/*/ | head -n 1)"; \
	if [ -n "$$LATEST_DIR" ]; then \
		cp "$$LATEST_DIR/${MODULE_NAME}".zip "${MODULE_DST_DIR}/${ZIP_DST_GENERATED_NAME}"; \
		echo "Latest build copied successfully from $$LATEST_DIR"; \
	else \
		echo "No directories found in ${USERPROFILE}/${MODULE_SOURCE_DIR}."; \
	fi
	@git add "${MODULE_DST_DIR}/*"

unzip_build:
	@echo "Unzipping build..."
	@rm -r "${MODULE_DST_DIR}/${MODULE_NAME}" || echo ""
	@cd "${MODULE_DST_DIR}" && unzip ${ZIP_DST_GENERATED_NAME} -d "${MODULE_NAME}"
	@git add "${MODULE_DST_DIR}/*"
	@echo "##############################"
	@echo "Unzip complete. Edit files in ${MODULE_DST_DIR}/${MODULE_NAME} and run 'make zip_build' to create a new build."
	@echo "##############################"

copy_and_unzip_build:
	$(MAKE) copy_build
	$(MAKE) unzip_build

zip_build:
	@echo "Creating ZIP build..."
	@cd "${MODULE_DST_DIR}" && rm "${ZIP_DST_PROD_NAME}" || echo ""
	cd "${MODULE_DST_DIR}/${MODULE_NAME}" && zip -r "${ZIP_DST_PROD_NAME}" "${MODULE_NAME}" && mv "${ZIP_DST_PROD_NAME}" ..
	@git add "${MODULE_DST_DIR}/*"
	@echo "ZIP build complete."

copy_local_to_bas:
	@echo "Copying local source code fo module to BAS..."
	rm -rf "${USERPROFILE}/${MODULE_BAS_INSTALLED_DIR}" || echo ""
	cp -r "${MODULE_DST_DIR}/${MODULE_NAME}/${MODULE_NAME}" "${USERPROFILE}/${MODULE_BAS_INSTALLED_DIR}"
	#ls -lia "${USERPROFILE}/${MODULE_BAS_INSTALLED_DIR}"

release_dry_run:
	@echo "Releasing..."
	npx semantic-release --no-ci -d

release:
	@echo "Releasing..."
	npx semantic-release --no-ci

#format:
#	@echo "Running format and lint fix..."
#	@yarn run format
#	@yarn run lint:fix
#	@echo "Format and lint fix complete."
