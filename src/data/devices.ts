// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
HONOR: [
                {

                        name: "HONOR 80 GT",

                        image: "/images/device/honor80gt.png",

                        specs: "Star Black / 12G + 512GB",

                        description:

                                "Flagship dual-core performance, IMX800 imaging, 66W Super Fast Charge.",

			link: "https://www.hihonor.com/cn/phones/honor-80-gt/",

		},

	],
};
