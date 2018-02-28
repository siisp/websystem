#ifndef SRC_MAPPER_RESEARCHERFORMATIONMAPPER_H_
#define SRC_MAPPER_RESEARCHERFORMATIONMAPPER_H_

#include "../DomainModel/ResearcherFormation.h"
#include "../ParserCSV/ResearcherData.h"

class ResearcherFormationMapper {
public:
	ResearcherFormationMapper();
	void Map(ResearcherData *researcherData, ResearcherFormation *formation);
	virtual ~ResearcherFormationMapper();
};

#endif
