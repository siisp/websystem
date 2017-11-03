#include "IdGenerator.h"
#include <ctime>
#include <cstdlib>
#include<string>

using std::string;

const char validChars[]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const int validCharsLength=62;
const int idLength=20;
bool randomInicialized=false;

IdGenerator::IdGenerator() {
	if (!randomInicialized){
		srand(time(NULL));
		randomInicialized=true;
	}

}

string IdGenerator::GetNewId(){
	string newId="-";
	for(int i=1;i<idLength;i++){
		newId[i]=validChars[rand() % validCharsLength];
	}
	return newId;
}

IdGenerator::~IdGenerator() {
}

