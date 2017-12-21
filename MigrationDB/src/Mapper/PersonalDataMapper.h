#ifndef PERSONALDATAMAPPER_H_
#define PERSONALDATAMAPPER_H_

#include "DataMapper.h"
#include "Researcher.h"
#include "ResearcherData.h"

class PersonalDataMapper : public DataMapper {
public:
	PersonalDataMapper();
	void Map(ResearcherData*, Researcher*);
	virtual ~PersonalDataMapper();
};

#endif
