'use client';

import { CarProps } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react'
import CustomButton from './CustomButton';

interface CarCardProps{ // another way of using types in typescript
    car:CarProps;
}

const CarCard = ({car}:CarCardProps) => {
    const {city_mpg, year, make, model, transmission, drive} = car;
    return (
    <div>

    </div>
    )
}

export default CarCard
