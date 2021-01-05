import { Action } from '@ngrx/store';
import {RecordInfo, RecordsState} from "./records-state";
import {createFeatureSelector, createSelector} from '@ngrx/store';


export enum ActionTypes {
  GET_RECORDS = 'GET_RECORDS',
  UPDATE_RECORDS = 'UPDATE_RECORDS'
}

export class GetRecords implements Action {
  readonly type = ActionTypes.GET_RECORDS;
}

export class UpdateRecords implements Action {
  readonly type = ActionTypes.UPDATE_RECORDS;
  constructor(records: Array<RecordInfo>) {
  }
}


export function recordsReducer(state: RecordsState = {}, action: Action) {

  switch (action.type) {

    case ActionTypes.GET_RECORDS: {
      return  <RecordsState>  { ...state };
    }

    case ActionTypes.UPDATE_RECORDS: {
      return <RecordsState> { records: action['records'] };
    }

    // can add more actions here

  }

}


export const featureSelector = createFeatureSelector<RecordsState>('records');

export const mapRecordsFunction = createSelector(featureSelector,(state: RecordsState) => state.records );
