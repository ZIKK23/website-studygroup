export type Division =
  | "UI/UX Design"
  | "Software Development"
  | "Technopreneur"
  | "Intelligence System";

export interface StudentResult {
  name: string;
  nim: string;
  division: Division;
  status: "Passed" | "Failed";
}

export const RESULTS: StudentResult[] = [
  {
    name: "Clarissa Tompunu",
    nim: "102022300038",
    division: "UI/UX Design",
    status: "Passed",
  },  {
    name: "Tes",
    nim: "10",
    division: "UI/UX Design",
    status: "Failed",
  },
];

export const WA_LINKS = {
  general: "https://chat.whatsapp.com/I27K1FbCUD1EbeVZbAlg3D?mode=gi_t"
};
