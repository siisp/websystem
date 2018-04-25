#include "Record.h"
#include <string>
using std::string;

Record::Record() {
}

int Record::GetFieldCount()const{
	return this->fields.size();
}

string Record::ToString(){
	string registro;
	for(int i=0;i<this->fields.size();++i){
		registro+=this->GetField(i)+",";
	}
	return registro;
}

string Record::GetField(int index)const{
	return (index>this->fields.size())?"":this->fields[index];
}

void Record::AddField(string field){
	this->fields.push_back(field);
}

string Record::operator[](int index) {
	return this->fields[index];
}

Record::~Record() {
}

