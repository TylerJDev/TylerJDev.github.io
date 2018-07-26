# A quick image compressing script made by Tyler Jones!
# Github link coming soon!

import tinify
import os
from minifykey import returnKey
tinify.key = returnKey(); # "See other.txt for key"

# Get all images
imageFolder = os.listdir('Images/')
supportedImages = ['.png', '.jpg']
# Ignore these folders/images
ignoreFiles = ['misc'];

# Check if .txt file exists, if not make it

for checkFiles in imageFolder:
	if checkFiles not in ignoreFiles:
		if os.path.splitext(checkFiles)[1] not in supportedImages:
			for i in os.listdir('Images/' + checkFiles + '/'):
				if os.path.splitext(i)[1] in supportedImages:
					print('Compressing ' + i + '...');
					source = tinify.from_file('Images/' + checkFiles + '/' + i);
					source.to_file('Images/' + checkFiles + '/' + i);
					# Add to .txt file as to not compress again
		else:
			print('Compressing ' + checkFiles + '...');
			source = tinify.from_file('Images/' + checkFiles);
			source.to_file('Images/' + checkFiles);
			# Add to .txt file as to not compress again

print('Finished compressing!')
