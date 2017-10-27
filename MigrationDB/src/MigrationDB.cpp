#include <iostream>
#include "ParserCSV/Record.h"
using namespace std;

string ConverToString(int algo){
	char v[2];
	v[1]='\0';
	v[0]=48+algo;
	return v;
}

int main() {
	Record* record = new Record();
	for(int i=0; i<5; i++){
		record->AddField("Hola " + ConverToString(i));
	}
	for(int x=0; x<record->GetFieldCount(); x++){
		cout<<record->GetField(x)<<endl;
	}
	cout<<(*record)[0];

	delete record;

	return 0;
}
