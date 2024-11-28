master:
	npm run build

pack:
	[ -f ./build.zip ] && rm ./build.zip || true
	[ -d build ] || mkdir build
	cp -r ./out/* ./build/
	cp -r ./api ./build/
	cd build && zip -r ../build.zip ./*

dev:
	PRODUCTION=false && npm run dev

serve:
	npx serve out