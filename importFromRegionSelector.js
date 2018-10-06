// INTERNAL DEPENDENCIES
const { execSync } = require('child_process');
const fs           = require('fs');

// EXTERNAL DEPENDENCIES
const commandExistsSync = require('command-exists').sync;
const mkdirp            = require('mkdirp');

// CONFIG
const FILEPATH          = '/Users/rramphal/Projects/region-selector/public/data.json';
const COLLECTION_NAME   = '2018.09.27_dml_gladius_mocks';
const INPUT_IMAGES_DIR  = '/Users/rramphal/Projects/region-selector/public';
const OUTPUT_IMAGES_DIR = '/Users/rramphal/Projects/_KYOKAN/kyokan-ui/public/images/components';

// GUARDS

// exit if we don't have ImageMagick installed
if (!commandExistsSync('convert')) {
  console.error('Could not find ImageMagick.');
  process.exit(1);
};

// exit if we can't file the datafile
if (!fs.existsSync(FILEPATH)) {
  console.error('Input datafile could not be found.');
  process.exit(1);
}

// LOGIC

const file              = fs.readFileSync(FILEPATH, 'utf8');
const data              = JSON.parse(file);
const collections       = data.collections;
const collection        = collections[COLLECTION_NAME];
const images            = collection.images;
const regionGroupsData  = collection.regionGroupsData;
const regionGroupCounts = {};

images.forEach((image) => {
  const filename = image.filename;
  const filepath = `${INPUT_IMAGES_DIR}/${COLLECTION_NAME}/${filename}`;
  const regions  = image.regions;

  regions.forEach((region, regionIndex) => {
    const regionGroups = region.regionGroups;
    const regionX      = region.x;
    const regionY      = region.y;
    const regionWidth  = region.width;
    const regionHeight = region.height;

    regionGroups.forEach((regionGroupName) => {
      const folderName = `${OUTPUT_IMAGES_DIR}/${regionGroupName}`;

      // ensure that output folder exists
      mkdirp.sync(folderName);

      if (regionGroupCounts.hasOwnProperty(regionGroupName)) {
        regionGroupCounts[regionGroupName] = regionGroupCounts[regionGroupName] + 1;
      } else {
        regionGroupCounts[regionGroupName] = 1;
      }

      const command = `convert "${filepath}" -crop ${regionWidth}x${regionHeight}+${regionX}+${regionY} "${folderName}/${regionGroupCounts[regionGroupName]}.png"`;

      // execSync(command);
    });
  });
});

Object.keys(regionGroupsData).forEach((regionGroupName) => {
  const data = regionGroupsData[regionGroupName];

  const images = [];

  for (let i = 1; i <= regionGroupCounts[regionGroupName]; i++) {
    images.push({
      src : `public/images/components/${regionGroupName}/${i}.png`,
      alt : `${regionGroupName} ${i}`,
    });
  }

  data.images = images;

  const jsonData = JSON.stringify(JSON.stringify(data));

  const command = `npm run generate ${regionGroupName} ${jsonData}`;
  execSync(command);
});
