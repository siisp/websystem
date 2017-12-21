#ifndef RESEARCHERPARSER_H_
#define RESEARCHERPARSER_H_

#include <vector>
#include "DataMapper.h"
#include "../DomainModel/Researcher.h"
#include "../ParserCSV/ResearcherData.h"

class ResearcherParser {
private:
	std::vector<DataMapper*> dataMappers;
public:
	ResearcherParser();
	Researcher* Parse(const ResearcherData* researcherData);
	virtual ~ResearcherParser();
}
;

#endif
