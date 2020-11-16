import { Observable, of } from 'rxjs';
import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';

describe('VoterService', () => {
  let voterService: VoterService, mockHttp;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
    voterService = new VoterService(mockHttp);
  });

  describe('deleteVoter', () => {
    it('should remove voter from list', () => {
      let session = { id: 6, voters: ['jhon', 'james'] };
      mockHttp.delete.and.returnValue(of(false));

      voterService.deleteVoter(3, session as ISession, 'jhon');

      expect(session.voters.length).toBe(1);
      expect(session.voters[0]).toBe('james');
    });
  });
});
