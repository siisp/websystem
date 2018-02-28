#ifndef SRC_DOMAINMODEL_JSONINTERFACE_H_
#define SRC_DOMAINMODEL_JSONINTERFACE_H_

#include <iostream>
#include <cstdio>
#include "../Rapidjson/document.h"
#include "../Rapidjson/writer.h"
#include "../Rapidjson/stringbuffer.h"
#include <string>
#include "Parametric.h"
#include <list>

class JsonInterface {
public:
	JsonInterface();
	std::list<Parametric*> *GetParametrics(const char* jsonString)const;
	virtual ~JsonInterface();
};

#endif
