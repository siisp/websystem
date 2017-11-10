#ifndef ENTITY_H_
#define ENTITY_H_
#include "IdGenerator.h"
#include <string>

using std::string;

class Entity {
protected:
	string id;
public:
	Entity();
	string GetId()const;
	virtual ~Entity();
};

#endif
