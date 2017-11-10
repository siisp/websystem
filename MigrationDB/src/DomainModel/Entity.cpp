#include "Entity.h"

Entity::Entity() {
	IdGenerator *generator= new IdGenerator();
	this->id=generator->GetNewId();
	delete generator;
}
string Entity::GetId()const{
	return this->id;
}

Entity::~Entity() {
}

