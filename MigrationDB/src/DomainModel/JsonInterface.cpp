#include "JsonInterface.h"
#include <iostream>
#include <cstdio>
#include "../Rapidjson/document.h"
#include "../Rapidjson/writer.h"
#include "../Rapidjson/stringbuffer.h"
#include <string>
#include <list>
#include "Parametric.h"

using namespace rapidjson;

JsonInterface::JsonInterface() {
}

std::list<Parametric*> *JsonInterface::GetParametrics(const char* jsonString)const{
	std::list<Parametric*> *parametrics = new std::list<Parametric*>;
	Document document;
	document.Parse(jsonString);
	for (Value::ConstMemberIterator itr = document.MemberBegin(); itr != document.MemberEnd(); ++itr){
		Parametric* newParametric = new Parametric();
		newParametric->SetId = itr->value.GetString();
		++itr;
		newParametric->SetName = itr->value.GetString();
		parametrics->push_back(newParametric);
	}
	return parametrics;
}

JsonInterface::~JsonInterface() {
}

