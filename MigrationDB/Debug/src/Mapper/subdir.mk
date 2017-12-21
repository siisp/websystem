################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
<<<<<<< HEAD
../src/Mapper/DataMapper.cpp \
../src/Mapper/ResearcherParser.cpp 

OBJS += \
./src/Mapper/DataMapper.o \
./src/Mapper/ResearcherParser.o 

CPP_DEPS += \
./src/Mapper/DataMapper.d \
./src/Mapper/ResearcherParser.d 
=======
../src/Mapper/PersonalDataMapper.cpp 

OBJS += \
./src/Mapper/PersonalDataMapper.o 

CPP_DEPS += \
./src/Mapper/PersonalDataMapper.d 
>>>>>>> c9ec16068d7b38cf8eadc73c95b60e9468875d24


# Each subdirectory must supply rules for building sources it contributes
src/Mapper/%.o: ../src/Mapper/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


