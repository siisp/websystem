#include "RecordsLoader.h"
#include "Record.h"
#include <iostream>
#include <string>
#include <list>
#include <fstream>
using std::string;
const int MaxRecordLenght=1000;
const char separator=',';

RecordsLoader::RecordsLoader() {
}

std::list<Record*> *RecordsLoader::GetRecords(string filePath)const{
	std::list<Record*> *records = new std::list<Record*>;
	std::fstream file;
	file.open(filePath.c_str(), std::fstream::in);
	char data[MaxRecordLenght];
	while (file.good()) {
		file.getline(data,MaxRecordLenght);
		Record* record=GetRecord(data);
		if(record!=NULL)records->push_back(record);
	}
	file.close();
	return records;
}

Record* RecordsLoader::GetRecord(string record)const{
	if (record.length()!=0){
		Record* newRecord = new Record();
		int separatorPosition=0, copyStartPosition=0;
		while(record.find(separator,copyStartPosition)!=-1){
			separatorPosition=record.find(separator,copyStartPosition);
			int cantCaracteres = (separatorPosition-copyStartPosition);
			newRecord->AddField(record.substr(copyStartPosition,(separatorPosition-copyStartPosition)));
			copyStartPosition=separatorPosition+1;
		}
		separatorPosition=record.find('\0',copyStartPosition);
		newRecord->AddField(record.substr(copyStartPosition,(separatorPosition-copyStartPosition)));
		return newRecord;
	}
	else{
		return NULL;
	}
}

RecordsLoader::~RecordsLoader() {
}
