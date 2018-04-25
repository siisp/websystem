#ifndef PERSONALDATAMAPPER_H_
#define PERSONALDATAMAPPER_H_

#include "DataMapper.h"
#include "../DomainModel/Researcher.h"
#include "../ParserCSV/ResearcherData.h"

class PersonalDataMapper : public DataMapper {
public:
	PersonalDataMapper();
	void Map(const ResearcherData* researcherData,Researcher* researcher);
	virtual ~PersonalDataMapper();
};

#endif
