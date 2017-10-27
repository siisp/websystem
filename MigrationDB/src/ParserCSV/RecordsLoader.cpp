#include "RecordsLoader.h"
#include "Record.h"
#include <string>
#include <list>
#include <fstream>
using std::string;
const int MaxRecordLenght=256;

RecordsLoader::RecordsLoader() {
}

std::list<Record*> *RecordsLoader::GetRecords(string filePath)const{
	std::list<Record*> *records = new std::list<Record*>;
	std::ifstream file;
	file.open(filePath.c_str(), std::ifstream::in);
	char data[MaxRecordLenght];
	while (file.eof()) {
		file.getline(data,MaxRecordLenght);
		Record* record=GetRecord(data);
		if(record!=NULL)records->push_back(record);
	}
	file.close();
	return records;
}

Record* RecordsLoader::GetRecord(string record)const{
	Record* newRecord = new Record;
	int separatorPosition=0, copyStartPosition=0;
	while(record[record.find(',',copyStartPosition)]!=-1){
		separatorPosition=record.find(',',copyStartPosition);
		newRecord->AddField(record.substr(copyStartPosition,(separatorPosition-copyStartPosition)+1));
		copyStartPosition=separatorPosition+1;
	}
	separatorPosition=record.find('\0',copyStartPosition);
	newRecord->AddField(record.substr(copyStartPosition,(separatorPosition-copyStartPosition)+1));
	return newRecord;
}

RecordsLoader::~RecordsLoader() {
}

