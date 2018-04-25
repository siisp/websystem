#ifndef DATAMAPPER_H_
#define DATAMAPPER_H_

#include "../ParserCSV/ResearcherData.h"
#include "../DomainModel/Researcher.h"

class DataMapper {
public:
	virtual void Map(const ResearcherData* researcherData,Researcher* researcher) = 0;
};

#endif
