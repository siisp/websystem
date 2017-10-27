#include "Record.h"
#include <string>
using std::string;

Record::Record() {
}

int Record::GetFieldCount()const{
	return this->fields.size();
}

string Record::GetField(int index)const{
	return this->fields[index];
}

void Record::AddField(string field){
	this->fields.push_back(field);
}

string Record::operator[](int index) {
	return this->fields[index];
}

Record::~Record() {
}

