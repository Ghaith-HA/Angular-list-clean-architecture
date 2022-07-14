export interface FilterInterface {
    key?: string;
    label?: string;
    filterType?: filterAppliedTypes;
    value?: any;
    type: filterTypes;
    strategy?: filterStrategies;
    support?: filterSupport;
    self?: boolean;
    multi?: boolean;
    isAutoComplete?: boolean;
    table?: string;
    field?: string;
    provider?: any;
    activated?: any;
    options?: FilterOptionsInterface[];
  }

  export interface FilterOptionsInterface {
    label: string;
    value: any;
    icon?: string;
  }
  
  export enum filterAppliedTypes{
    normal = 'NORMAL',
  }
  export enum filterSupport {
    normal = 'NORMAL',
  }
  export enum filterStrategies {
    gt = 'GT',
    lt = 'LT',
    eq = 'EQ',
  }
  export enum filterTypes {
    title = 'with_keywords',
  }
  export enum filterKeys {
    title = 'with_keywords',
  }