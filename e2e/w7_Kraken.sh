# Move *.feature files from data_generation/aleatorio/ to features/
for file in "$(dirname "$0")/features/data_generation/aleatorio"/*.feature; do
    mv "$file" "$(dirname "$0")/features/"
done

./node_modules/kraken-node/bin/kraken-node run

for file in "$(dirname "$0")/features"/*.feature; do    
    mv "$file" "$(dirname "$0")/features/data_generation/aleatorio/"
done

for file in "$(dirname "$0")/features/data_generation/dinamico"/*.feature; do
    mv "$file" "$(dirname "$0")/features/"
done

./node_modules/kraken-node/bin/kraken-node run

for file in "$(dirname "$0")/features"/*.feature; do    
    mv "$file" "$(dirname "$0")/features/data_generation/dinamico/"
done

for file in "$(dirname "$0")/features/data_generation/priori"/*.feature; do
    mv "$file" "$(dirname "$0")/features/"
done

./node_modules/kraken-node/bin/kraken-node run

for file in "$(dirname "$0")/features"/*.feature; do    
    mv "$file" "$(dirname "$0")/features/data_generation/priori/"
done