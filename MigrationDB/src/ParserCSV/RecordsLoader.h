#ifndef RECORDSLOADER_H_
#define RECORDSLOADER_H_
#include <list>
#include "Record.h"

class RecordsLoader {
private:
	Record* GetRecord(string record)const;
public:
	RecordsLoader();
	std::list<Record*> *GetRecords(string filePath)const;
	virtual ~RecordsLoader();
};

#endif /* RECORDSLOADER_H_ */
