import { CustomTableData } from './types/CustomTableData';

export const TEST_DATA: CustomTableData = {
    columns: ['Firm', 'Model', 'Color', 'Price', 'Details'],
    tableData: [
        {
            columns: [
                'Wilson',
                'ProStaff',
                'Red',
                '$200',
                {
                    columns: [
                        'Weight without strings',
                        'Weight with strings',
                        'Head size',
                        'Balance',
                        'String formula',
                        'Swingweight',
                        'Stiffness',
                    ],
                    tableData: [
                        {
                            columns: [
                                '295',
                                '315',
                                '97',
                                '32.5',
                                '16x19',
                                '330',
                                '65',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            columns: [
                'Wilson',
                'Blade',
                'Black',
                '$230',
                {
                    columns: [
                        'Weight without strings',
                        'Weight with strings',
                        'Head size',
                        'Balance',
                        'String formula',
                        'Swingweight',
                        'Stiffness',
                    ],
                    tableData: [
                        {
                            columns: [
                                '305',
                                '325',
                                '98',
                                '32',
                                '18x20',
                                '330',
                                '62',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            columns: [
                'Babolat',
                'Pure Drive',
                'Blue',
                '$250',
                {
                    columns: [
                        'Weight without strings',
                        'Weight with strings',
                        'Head size',
                        'Balance',
                        'String formula',
                        'Swingweight',
                        'Stiffness',
                    ],
                    tableData: [
                        {
                            columns: [
                                '300',
                                '320',
                                '100',
                                '32.5',
                                '16x19',
                                '320',
                                '70',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            columns: [
                'Head',
                'Speed',
                'Yellow',
                '$220',
                {
                    columns: [
                        'Weight without strings',
                        'Weight with strings',
                        'Head size',
                        'Balance',
                        'String formula',
                        'Swingweight',
                        'Stiffness',
                    ],
                    tableData: [
                        {
                            columns: [
                                '285',
                                '305',
                                '100',
                                '32',
                                '16x19',
                                '320',
                                '70',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            columns: [
                'Yonex',
                'Ezone',
                'Green',
                '$240',
                {
                    columns: [
                        'Weight without strings',
                        'Weight with strings',
                        'Head size',
                        'Balance',
                        'String formula',
                        'Swingweight',
                        'Stiffness',
                    ],
                    tableData: [
                        {
                            columns: [
                                '285',
                                '305',
                                '98',
                                '32',
                                '16x19',
                                '320',
                                '65',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            columns: [
                'Prince',
                'Phantom',
                'White',
                '$210',
                {
                    columns: [
                        'Weight without strings',
                        'Weight with strings',
                        'Head size',
                        'Balance',
                        'String formula',
                        'Swingweight',
                        'Stiffness',
                    ],
                    tableData: [
                        {
                            columns: [
                                '305',
                                '325',
                                '93',
                                '32',
                                '16x18',
                                '320',
                                '60',
                            ],
                        },
                    ],
                },
            ],
        },
        {
            columns: ['Prince', 'Phantom', 'White', '$210', 'ask for details'],
        },
    ],
};
